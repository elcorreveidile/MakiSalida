import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import QuejaAdministrativaPDF from '@/lib/pdf-documents/legal/QuejaAdministrativa';

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(QuejaAdministrativaPDF());

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="queja-administrativa-makisalida.pdf"');
    headers.set('Cache-Control', 'public, max-age=31536000');

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error('Error generando PDF:', error);
    return NextResponse.json(
      { error: 'Error generando el PDF' },
      { status: 500 }
    );
  }
}
