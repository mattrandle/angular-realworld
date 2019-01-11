import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

import { AuthService } from 'services/auth.service';

@Directive({ selector: '[showIfAuthenticated]' })
export class ShowIfAuthenticatedDirective implements OnInit {
  
  constructor(
    private templateRef: TemplateRef<any>,
    private authService: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  condition: boolean;

  @Input() set showIfAuthenticated(condition: boolean) {
    this.condition = condition;
  }

  ngOnInit() {
    this.authService.isAuthenticated.subscribe(
      isAuthenticated => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    )
  }
}