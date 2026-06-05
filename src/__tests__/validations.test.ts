import { contactSchema } from '@/lib/validations/contact';
import { registerSchema, loginSchema } from '@/lib/validations/auth';

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
});

describe('registerSchema', () => {
  it('validates a correct registration', () => {
    const result = registerSchema.safeParse({
      name: 'María López',
      email: 'maria@example.com',
      password: 'Segura123',
      confirmPassword: 'Segura123',
    });
    expect(result.success).toBe(true);
  });

  it('rejects weak password', () => {
    const result = registerSchema.safeParse({
      name: 'María López',
      email: 'maria@example.com',
      password: 'weak',
      confirmPassword: 'weak',
    });
    expect(result.success).toBe(false);
  });

  it('rejects mismatched passwords', () => {
    const result = registerSchema.safeParse({
      name: 'María López',
      email: 'maria@example.com',
      password: 'Segura123',
      confirmPassword: 'Diferente123',
    });
    expect(result.success).toBe(false);
  });

  it('requires uppercase in password', () => {
    const result = registerSchema.safeParse({
      name: 'María López',
      email: 'maria@example.com',
      password: 'segura123',
      confirmPassword: 'segura123',
    });
    expect(result.success).toBe(false);
  });
});

describe('loginSchema', () => {
  it('validates correct login', () => {
    const result = loginSchema.safeParse({
      email: 'maria@example.com',
      password: 'password',
    });
    expect(result.success).toBe(true);
  });

  it('rejects invalid email', () => {
    const result = loginSchema.safeParse({
      email: 'not-email',
      password: 'password',
    });
    expect(result.success).toBe(false);
  });
});
