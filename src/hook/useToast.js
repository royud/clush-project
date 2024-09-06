import { useRecoilState } from "recoil";
import { toastListStore } from "../store/toast";

const useToast = () => {
  const [toastList, setToastList] = useRecoilState(toastListStore);

  const addToast = (message, type = "success") => {
    setToastList([
      ...toastList,
      {
        id: Date.now(),
        message,
        type,
      },
    ]);

    setTimeout(() => {
      const newToastList = [...toastList];
      newToastList.shift();
      setToastList(newToastList);
    }, 2000);
  };

  return { toastList, addToast };
};

export default useToast;
