import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faJava, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function useFontAwesome() {
  return library.add(
    // free solid
    faEnvelope,
    // brand
    faJava,
    faGithub
  );
}
