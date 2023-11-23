import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockPostComponent } from './block-post.component';

describe('BlockPostComponent', () => {
  let component: BlockPostComponent;
  let fixture: ComponentFixture<BlockPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockPostComponent]
    });
    fixture = TestBed.createComponent(BlockPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
