@extends('main')

@section('content')
    <section id="offer2">
        @include('main.domainSearch')
    </section>
    @include('main.whyChooseUs')
    @include('main.domain.pricingTable')
    @include('main.clientBrands')
@endsection