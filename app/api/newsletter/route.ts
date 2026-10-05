import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TIS_EMAIL = 'thierryindustriesaucisses15@gmail.com';

export async function POST(request: Request) {
  try {
    // Check API key
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY is missing.');

      return NextResponse.json(
        {
          success: false,
          message:
            'La clé API Resend est manquante. Vérifiez votre fichier .env.local.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    // Read request
    const body = await request.json();
    const contact = String(body?.contact || '').trim();

    // Validate contact
    if (!contact) {
      return NextResponse.json(
        {
          success: false,
          message: 'Veuillez fournir votre email ou numéro WhatsApp.',
        },
        { status: 400 }
      );
    }

    if (contact.length > 254) {
      return NextResponse.json(
        {
          success: false,
          message: 'Les informations fournies sont trop longues.',
        },
        { status: 400 }
      );
    }

    // Send email through Resend
    const { data, error } = await resend.emails.send({
      from: 'TIS SARL <onboarding@resend.dev>',
      to: [TIS_EMAIL],
      subject: 'Nouvelle inscription TIS',
      text: `
Nouvelle inscription TIS SARL

Une personne vient de s'inscrire aux alertes et nouveautés de TIS SARL.

Contact fourni :
${contact}

Cette inscription provient du formulaire Newsletter/Alertes du site officiel de TIS SARL.
      `,
    });

    // Resend returned an error
    if (error) {
      console.error('RESEND ERROR:', error);

      return NextResponse.json(
        {
          success: false,
          message: error.message || 'Erreur Resend.',
        },
        { status: 500 }
      );
    }

    // Success
    console.log('Newsletter subscription received:', {
      contact,
      emailId: data?.id,
    });

    return NextResponse.json({
      success: true,
      message: 'Inscription enregistrée avec succès.',
    });
  } catch (error) {
    console.error('NEWSLETTER API ERROR:', error);

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Une erreur interne est survenue.',
      },
      { status: 500 }
    );
  }
}