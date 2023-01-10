export interface AuthResponse {
  idToken: string; //Yeni oluşturulan kullanıcı için bir Firebase Auth ID belirtecidir.
  email: string; // Email
  refreshToken: string; // Yeni oluşturulan kullanıcı için bir Firebase Auth yenileme belirtecidir.
  expiresIn: string; // Kimlik belirtecinin süresinin dolacağı saniye sayısıdır.
  localId: string; // Yeni oluşturulan kullanıcının kullanıcı kimliği.
  registered?: boolean; // E-postanın mevcut bir hesap için olup olmadığını kontrol eder.
}
