import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "posts",
    pathMatch: "full",
  },
  {
    path: "posts",
    loadChildren: () =>
      import("./posts/posts.module").then((m) => m.PostsPageModule),
  },
  {
    path: "post-form",
    loadChildren: () =>
      import("./post-form/post-form.module").then((m) => m.PostFormPageModule),
  },
  {
    path: "posts/edit/:postId",
    loadChildren: () =>
      import("./post-form/post-form.module").then((m) => m.PostFormPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
