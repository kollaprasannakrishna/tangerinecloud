@extends('main')
@section('title')
    AWS-Cloud Marketplace
@endsection
@section('content')
    @include('main.awsPage.awsCarousel')
    @include('main.awsPage.awsButtonPage')
    @include('main.awsPage.awsDetails')
    @include('main.whyChooseUs')
    {{--@include('main.vpsPricing')
    @include('main.awsPage.awsPricingTable')--}}
    @include('main.clientBrands')
@endsection