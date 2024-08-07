<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- SEO -->
    <meta name="description"
        content="UMN Festival merupakan festival tahunan terbesar di Universitas Multimedia Nusantara sebagai bentuk perayaan ulang tahun UMN. 
    Melalui kegiatan ini diharapkan mahasiswa/i di UMN dapat meningkatkan solidaritas satu sama lain serta dapat meningkatkan kepedulian dengan memberikan 
    bantuan dari pihak internal kepada pihak eksternal.">
    <meta name="author" content="UMN Festival 2024">
    <meta name="keywords"
        content="UMN Festival, umnfestival, UMNFEST, UMN Festival 2024, umn festival 2024, ufest, ufest 2024">

    <!-- Midtrans -->
    {{-- <script type="text/javascript" src="https://app.midtrans.com/snap/snap.js"
        data-client-key="{{ env('MIDTRANS_CLIENT_KEY') }}"></script> --}}
    {{-- <script type="text/javascript" src="https://app.sandbox.midtrans.com/snap/snap.js"
        data-client-key="{{ env('MIDTRANS_CLIENT_KEY') }}"></script> --}}

    <!-- Favicon -->
    <link rel="icon" href="/favicon.ico" type="image/x-icon">
    <title>UMN FESTIVAL</title>

    <!-- Google Tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-6QC4CCN4HB"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-6QC4CCN4HB');
    </script>

    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
    @inertiaHead
</head>

<body>
    @inertia
</body>

</html>
