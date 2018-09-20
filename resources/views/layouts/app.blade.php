<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="{{ asset('img/favicon.ico') }}">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Shift') }}</title>

    <!-- Scripts -->
    @if (str_contains(url()->current(), 'article/create'))
        <script src="{{ asset('js/app.js') }}" defer></script>
    @endif

    <!-- Fonts -->
    <link rel="dns-prefetch" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Muli:300,400,400i,600,700" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/shift.css') }}" rel="stylesheet">

    <script async defer src="http://www.instagram.com/embed.js"></script>
</head>
<body>
    <main @if (Route::currentRouteName() === "login") class="login-page-bg" @endif>
        @if (Route::currentRouteName() === "login")
            <div class="login-page-bg-img"></div>
        @else
            @include('layouts.navbar')
        @endif

        @yield('content')
    </main>
</body>
</html>
