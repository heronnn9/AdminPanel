// eslint-disable-next-line import/no-named-as-default
import { useAppSelector } from "@/store";

function useLocale() {
  const locale = useAppSelector((state) => state.locale.currentLang);

  return locale;
}

export default useLocale;
