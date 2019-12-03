import { restConnector } from "./axiosBaseURL"
import * as yup from "yup"

export const SignUpSchema = yup.object().shape({
  taiKhoan: yup.string().required("Enter your username"),
  matKhau: yup
    .string()
    .required("Enter your password")
    .min(6, "Length of password must be between 6 and 18")
    .max(18, "Length of password must be between 6 and 18"),
  hoTen: yup.string().matches(/^[a-zA-Z]*$/, "Must be characters"),
  soDT: yup.string().matches(/^[0-9]*$/, "Must be numbers"),
  email: yup.string().email("Invalid Email")
})

class AuthService {
  fetchCredentials(value) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/DangNhap`,
      method: "POST",
      data: value
    })
  }
  updateInformation(value) {
    return restConnector({
      url: `/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      method: "PUT",
      data: value
    })
  }
}
export default new AuthService()
