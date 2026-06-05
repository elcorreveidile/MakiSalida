import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import GuiaDerechosPDF from '@/lib/pdf-documents/legal/GuiaDerechos';

export async function GET() {
  try {
    // Generar el PDF
    const pdfBuffer = await renderToBuffer(GuiaDerechosPDF());

    // Configurar headers para descarga
    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="guia-derechos-penitenciarios-makisalida.pdf"');
    headers.set('Cache-Control', 'public, max-age=31536000'); // Cache por 1 año

    // Retornar el PDF
    return new NextResponse(new Uint8Array(pdfBuffer), {
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
