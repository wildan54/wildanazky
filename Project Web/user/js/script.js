function validateForm() {
    if( document.alamat.name.value == "" ) {
        alert( "Masukkan nama!" );
        document.alamat.name.focus() ;
        return false;
     }
     if( document.alamat.no.value == "" ) {
        alert( "Masukkan nomor hp!" );
        document.alamat.no.focus() ;
        return false;
     }
    if( document.alamat.provinsi.value == "" ) {
        alert( "Masukkan provinsi!" );
        document.alamat.provinsi.focus() ;
        return false;
     }
     if( document.alamat.kota.value == "" ) {
        alert( "Masukkan kota!" );
        document.alamat.kota.focus() ;
        return false;
     }
    if( document.alamat.kecamatan.value == "" ) {
        alert( "Masukkan kecamatan kecamatan!" );
        document.alamat.kecamatan.focus() ;
        return false;
     }
     if( document.alamat.kodepos.value == "" ) {
        alert( "Masukkan kode pos!" );
        document.alamat.kodepos.focus() ;
        return false;
     }
     if( document.alamat.alamat.value == "" ) {
        alert( "Masukkan alamat!" );
        document.alamat.alamat.focus() ;
        return false;
     }
     
     return( true );
  }

function validateRegis() {
    if( document.registrasi.name.value == "" ) {
        alert( "Masukkan nama!" );
        document.registrasi.name.focus() ;
        return false;
     }
     if( document.registrasi.no.value == "" ) {
        alert( "Masukkan nomor hp!" );
        document.registrasi.no.focus() ;
        return false;
     }

    if( document.registrasi.username.value == "" ) {
        alert( "Masukkan username!" );
        document.registrasi.username.focus() ;
        return false;
     }
     
     if( document.registrasi.password.value != document.registrasi.ppassword.value) {
        alert( "Password is not same" );
        document.registrasi.password.focus() ;
        return false;
     }
     
     return( true );
  }

function validateLogin() {
    if( document.login.name.value == "" ) {
        alert( "Masukkan nama!" );
        document.login.name.focus() ;
        return false;
     }

    if( document.login.username.value == "" ) {
        alert( "Masukkan username!" );
        document.login.username.focus() ;
        return false;
     }

    if( document.login.password.value == "" ) {
        alert( "Masukkan password!" );
        document.login.password.focus() ;
        return false;
     }

     return( true );
  }