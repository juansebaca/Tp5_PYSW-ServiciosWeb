export interface RespuestaConversion {
  success: boolean;
  query: {
    from: string;
    to: string;
    amount: number;
  };
  result: number;
  info: {
    rate: number;
  };
}