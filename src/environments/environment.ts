export const environment = {
  production: false,
  apiUrl: 'http://localhost:9090/api/v1',
  oauth: {
    issuer: 'http://localhost:8888/auth/realms/workout-journal',
    redirectUri: 'http://localhost:4200',
    clientId: 'wj-web-client',
  }
};
