@extends('main')
@section('title')
    IBM-Cloud Marketplace
@endsection

@section('content')
    @include('main.ibmCloudPage.ibmCloudCarousel')
    @include('main.ibmCloudPage.ibmButtonPage')
    @include('main.ibmCloudPage.ibm-dcm')
    @include('main.ibmCloudPage.ibm-details')
    {{--@include('main.pricingArea')--}}

    {{--@include('main.ibmCloudPage.ibm-priceTable')--}}

    @include('main.clientBrands')
@endsection

