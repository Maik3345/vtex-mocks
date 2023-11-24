// vtex-mocks.d.ts
declare module "vtex-mocks" {
  // Aquí puedes definir los tipos que ofrece tu librería
  // Por ejemplo, si `vtex-mocks` exporta una función llamada `generateMock`, podrías hacer:
  export const useRuntime: () => {
    amp: boolean;
    setQuery: any;
    account: string;
    hints: {
      mobile: boolean;
    };
    culture: {
      currency: string;
    };
    query: string;
    navigate: any;
  };
}
