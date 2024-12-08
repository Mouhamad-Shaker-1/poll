import * as yup from "yup";

// تعريف مخطط التحقق باستخدام Yup
export const useInfoSchema = yup.object().shape({
  name: yup.string().required("الاسم مطلوب"),
  email: yup
    .string()
    .email("يجب إدخال بريد إلكتروني صالح")
    .required("البريد الإلكتروني مطلوب"),
  employment_status: yup
    .string()
    .oneOf(["student", "employee", "employer"], "قيمة غير صالحة")
    .required("الحالة الوظيفية مطلوبة"),
  teaching: yup.string().required("حقل التعليم مطلوب"),
  age: yup
    .number()
    .min(18, "يجب أن يكون العمر 18 أو أكثر")
    .max(99, "العمر يجب أن يكون أقل من 99"),
  address: yup.string().required("عنوان السكن مطلوب"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "الجنس غير صالح")
    .required("الجنس مطلوب"),
});
