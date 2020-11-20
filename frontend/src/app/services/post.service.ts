import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";

export interface Post {
  id?: string;
  title: string;
  subtitle?: string;
  description: string;
  image?: {
    formats: {
      small: {
        url: string;
      };
    };
  };
}

@Injectable({
  providedIn: "root",
})
export class PostService {
  constructor(private http: HttpClient) {}

  API = `${environment.API}/posts`;

  getPosts() {
    return this.http.get<Post[]>(this.API);
  }

  createPost(title: string, description: string) {
    return this.http.post<Post[]>(this.API, {
      title,
      description,
    });
  }

  removePost(id: string) {
    return this.http.delete<Post>(`${this.API}/${id}`);
  }

  getPostById(id: string) {
    return this.http.get<Post>(`${this.API}/${id}`);
  }

  updatePost(id: string, post: Post) {
    return this.http.put(`${this.API}/${id}`, post);
  }
}
