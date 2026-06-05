import { NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import SolicitudPermisosPDF from '@/lib/pdf-documents/legal/SolicitudPermisos';

export async function GET() {
  try {
    const pdfBuffer = await renderToBuffer(SolicitudPermisosPDF());

    const headers = new Headers();
    headers.set('Content-Type', 'application/pdf');
    headers.set('Content-Disposition', 'attachment; filename="solicitud-permisos-makisalida.pdf"');
    headers.set('Cache-Control', 'public, max-age=31536000');

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
