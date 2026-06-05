import { contactSchema } from '@/lib/validations/contact';

describe('contactSchema', () => {
  it('validates a correct contact form', () => {
    const result = contactSchema.safeParse({
      name: 'Juan García',
      email: 'juan@example.com',
      subject: 'Consulta sobre recursos',
      message: 'Me gustaría saber más sobre los recursos legales disponibles.',
    });
    expect(result.success).toBe(true);
  });

  it('rejects short name', () => {
    const result = contactSchema.safeParse({
      name: 'J',
      email: 'juan@example.com',
      subject: 'Consulta',
      message: 'Mensaje de prueba suficientemente largo',
    });
    expect(result.success).toBe(false);
  });

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Juan García',
      email: 'not-an-email',
      subject: 'Consulta sobre recursos',
      message: 'Mensaje de prueba suficientemente largo',
    });
    expect(result.success).toBe(false);
  });

  it('rejects short message', () => {
    const result = contactSchema.safeParse({
      name: 'Juan García',
      email: 'juan@example.com',
      subject: 'Consulta sobre recursos',
      message: 'Corto',
    });
    expect(result.success).toBe(false);
  });

  it('rejects short subject', () => {
    const result = contactSchema.safeParse({
      name: 'Juan García',
      email: 'juan@example.com',
      subject: 'Hi',
      message: 'Mensaje de prueba suficientemente largo',
    });
    expect(result.success).toBe(false);
  });
});
