import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  username: Yup.string()
    .required("يجب إدخال اسم المستخدم أو البريد الإلكتروني"),
  password: Yup.string()
    .required("يجب إدخال كلمة السر")
    .min(5, "يجب أن تتكون كلمة السر من 5 أحرف على الأقل"),
});
