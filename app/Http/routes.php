<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('ibm-cloud-marketplace',[
   'uses'=>'PagesController@getSharedHost',
    'as'=>'ibm-cloud'
]);

Route::get('domain-search',[
    'uses'=>'PagesController@getDomain',
    'as'=>'domainSearch'
]);

Route::get('aws-cloud-marketplace',[
    'uses'=>'PagesController@getVpsHosting',
    'as'=>'aws-cloud'
]);

Route::get('dedicated-hosting',[
    'uses'=>'PagesController@getDedicatedHosting',
    'as'=>'dedicatedHosting'
]);

Route::get('about',[
    'uses'=>'PagesController@getAbout',
    'as'=>'about'
]);
Route::get('frequently-asked-questions',[
    'uses'=>'PagesController@getFaq',
    'as'=>'faq'
]);
Route::get('datacenter',[
    'uses'=>'PagesController@getDataCenter',
    'as'=>'datacenter'
]);
Route::get('testimonials',[
    'uses'=>'PagesController@getTestimonials',
    'as'=>'testimonials'
]);

Route::get('login',[
    'uses'=>'PagesController@getLogin',
    'as'=>'login'
]);
Route::get('signup',[
    'uses'=>'PagesController@getSignup',
    'as'=>'signup'
]);
Route::get('affliate',[
    'uses'=>'PagesController@getAffliate',
    'as'=>'affliate'
]);
Route::get('blog',[
    'uses'=>'PagesController@getBlog',
    'as'=>'blog'
]);
