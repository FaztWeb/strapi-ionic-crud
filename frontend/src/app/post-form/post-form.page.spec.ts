import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostFormPage } from './post-form.page';

describe('PostFormPage', () => {
  let component: PostFormPage;
  let fixture: ComponentFixture<PostFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
