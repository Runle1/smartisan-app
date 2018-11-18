import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//路由引入页面组件
import { HomeComponent } from './home/home.component';
import { ClassifyComponent } from './classify/classify.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { PersonalComponent } from './personal/personal.component';
import { FooterbarComponent } from './footerbar/footerbar.component';
import { NotfoundComponentComponent } from './notfound-component/notfound-component.component';

//配置路由
const routes: Routes = [
{
  path:"home",
  component:HomeComponent
},
{
  path:"classify",
  component:ClassifyComponent
},
{
  path:"shopping",
  component:ShoppingComponent
},
{
  path:"personal",
  component:PersonalComponent
},
{
  path:"footerbar",
  component:FooterbarComponent
},
//路由重定向
{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},
{
  path:'**',
  component:NotfoundComponentComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
