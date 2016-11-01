<!DOCTYPE html>
<!--[if lt IE 7 ]> <html class="ie ie6"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9"> <![endif]-->
<!--[if !(IE)]><!-->
<html lang="">
<!--<![endif]-->

<head>

    @include('stylesJs.headSection')
</head>

<body>
    @include('partials._promoArea')
    <div id="menu">
        @include('partials._clientNav') 
        @include('partials._mainNav')
    </div>

    
    
    
    
    
    @yield('content') 
    
    
    
    
    
    
    @include('partials._footer') 
    @include('partials._copyright') 
    
    
    
    
    
    
    @include('stylesJs.bodySection')
</body>

</html>