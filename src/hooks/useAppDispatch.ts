//sử dụng useDispatch từ thư viện react-redux và cung cấp kiểu AppDispatch từ redux/store.
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const useAppDispatch: () => AppDispatch = useDispatch

export default useAppDispatch