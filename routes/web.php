<?php
use App\Http\Controllers\userController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
  //   return view('index');
 //});
route::get('/', [userController::class, 'index'])->name('index');
route::get('/about', [userController::class, 'about'])->name('about');
route::get('/contact', [userController::class, 'contact'])->name('contact');
route::get('/seo', [userController::class, 'seo'])->name('seo');
route::get('/design', [userController::class, 'design'])->name('design');
route::get('/services', [userController::class, 'services'])->name('services');
route::get('/portfolio', [userController::class, 'portfolio'])->name('portfolio');
route::get('/app-development', [userController::class, 'app_development'])->name('app_development');
route::get('/smm', [userController::class, 'social_media_marketing'])->name('social_media_marketing');

route::get('/graphic-design', [userController::class, 'graphic_design'])->name('graphic_design');

/*Route::get('/contact-us', [ContactController::class, 'index']);
Route::post('contact-us', [ContactController::class, 'store'])->name('contact.us.store'); */
