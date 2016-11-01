<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class PagesController extends Controller
{
    public function getSharedHost(){
        return view('pages.ibm-cloud');
    }
    public function getDomain(){
        return view('pages.domain');
    }
    public function getVpsHosting(){
        return view('pages.aws-cloud');
    }
    public function getDedicatedHosting(){
        return view('pages.dedicated-hosting');
    }
    public function getAbout(){
        return view('pages.about');
    }
    public function getFaq(){
        return view('pages.faq');
    }
    public function getDataCenter(){
        return view('pages.datacenter');
    }
    public function getTestimonials(){
        return view('pages.testimonials');
    }
    public function getLogin(){
        return view('pages.login');
    }
    public function getSignup(){
        return view('pages.signup');
    }
    public function getAffliate(){
        return view('pages.affliate');
    }
    public function getBlog(){
        return view('pages.blog');
    }

}
