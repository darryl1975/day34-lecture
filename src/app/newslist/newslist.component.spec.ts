import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslistComponent } from './newslist.component';

describe('NewslistComponent', () => {
  let component: NewslistComponent;
  let fixture: ComponentFixture<NewslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewslistComponent]
    });
    fixture = TestBed.createComponent(NewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
