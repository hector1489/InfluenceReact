export const URLBASE = import.meta.env.VITE_BACKEND_URL ?? "http://localhost:3000";

export const ENDPOINT = {
  REGISTER: `${URLBASE}/register`,
  TRANSBANK_PAYMENT: `${URLBASE}/api/payments/transbank`,
  MERCADOPAGO_PAYMENT: `${URLBASE}/api/payments/mercadopago`,
};
