import { restConnector } from "./axiosBaseURL"

class InterfaceService {
  registerCourse(value) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/DangKyKhoaHoc`,
      method: "POST",
      data: value
    })
  }
}
export default new InterfaceService()
