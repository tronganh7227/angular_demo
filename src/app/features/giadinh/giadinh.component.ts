import {
  Component,
  DestroyRef,
  inject,
  OnInit,
  Input,
  Output,
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "../../core/auth/user.model";
import { HeaderComponent } from "../../core/layout/header.component";
import { TableSizeDemo } from "../../features/danhsach/danhsach.component";
import { UserService } from "../../core/auth/services/user.service";
import { ListErrorsComponent } from "../../shared/components/list-errors.component";
import { Errors } from "../../core/models/errors.model";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Product } from "../../features/danhsach/product";
import { ProductService } from "../../features/danhsach/productservice";
interface giadinhForm {
  image: FormControl<string>;
  username: FormControl<string>;
  bio: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: "app-giadinh-page",
  templateUrl: "./giadinh.component.html",
  imports: [
    ListErrorsComponent,
    ReactiveFormsModule,
    HeaderComponent,
    TableSizeDemo,
  ],
  standalone: true,
})
export default class giadinhComponent implements OnInit {
  user!: User;
  tableSizeDemo!: TableSizeDemo;
  giadinhForm = new FormGroup<giadinhForm>({
    image: new FormControl("", { nonNullable: true }),
    username: new FormControl("", { nonNullable: true }),
    bio: new FormControl("", { nonNullable: true }),
    email: new FormControl("", { nonNullable: true }),
    password: new FormControl("", {
      validators: [Validators.required],
      nonNullable: true,
    }),
  });

  errors: Errors | null = null;
  isSubmitting = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly productService: ProductService,
  ) {}
  // gán dữ liệu cho compoment con
  @Output() input_data_con!: string;
  @Output() product_cha!: Product[];
  ngOnInit(): void {
    this.giadinhForm.patchValue(
      this.userService.getCurrentUser() as Partial<User>,
    );
    this.productService.getProductsMini().then((data) => {
      this.product_cha = data;
    });

    // gán dữ liệu cho danh sách con
    this.input_data_con = "Truyền dữ liệu từ component cha sang";
  }
  logout(): void {
    this.userService.logout();
  }
  submitForm() {
    this.isSubmitting = true;
    this.userService
      .update(this.giadinhForm.value)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: ({ user }) =>
          void this.router.navigate(["/profile/", user.username]),
        error: (err) => {
          this.errors = err;
          this.isSubmitting = false;
        },
      });
  }
}
