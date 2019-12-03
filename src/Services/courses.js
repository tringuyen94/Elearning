import { restConnector } from "./axiosBaseURL"

class CourseService {
  fetchCategories() {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
      method: "GET"
    })
  }
  fetchCourses() {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09`,
      method: "GET"
    })
  }
  fetchCourseByCategories(maDanhMuc) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP09`,
      method: "GET"
    })
  }
  fetchCourseDetail(maKhoaHoc) {
    return restConnector({
      url: `/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET"
    })
  }
}
export default new CourseService()
