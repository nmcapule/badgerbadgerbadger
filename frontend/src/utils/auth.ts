import { mutation, OperationContext, operationStore, OperationStore } from '@urql/svelte';
import type { AuthenticateAccountInput, Mutation } from '../generated/graphql';

export const JWT_TOKEN_KEY = 'token';
export const AUTHENTICATE_QUERY = `
mutation ($email: String!, $password: String!) {
  authenticateAccount(input: {email: $email, password: $password}) {
    clientMutationId
    jwtToken
  }
}`;

export function createAuthenticator() {
  return mutation<Mutation, AuthenticateAccountInput>(operationStore(AUTHENTICATE_QUERY));
}

export async function login(
  email: string,
  password: string,
  authenticate: (
    variables?: AuthenticateAccountInput,
    context?: Partial<OperationContext>,
  ) => Promise<OperationStore<Mutation, AuthenticateAccountInput>>,
) {
  const response = await authenticate({ email, password });
  const token = response.data?.authenticateAccount?.jwtToken;
  if (!token) {
    throw new Error('invalid credentials');
  }
  localStorage.setItem(JWT_TOKEN_KEY, token);
}

export async function logout() {
  localStorage.removeItem(JWT_TOKEN_KEY);
}
