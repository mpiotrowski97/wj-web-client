export const environment = {
  production: false,
  apiUrl: 'http://localhost:9090/api/v1',
  oauth: {
    issuer: 'http://localhost:8888/auth/realms/workout-journal',
    redirectUri: window.location.origin + '/',
    clientId: 'wj-web-client',
  }
};
