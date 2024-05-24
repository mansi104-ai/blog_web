import Content from "../components/content";
import { draftMode } from "next/headers";

export default function Home() {
  const { isEnabled } = draftMode();
  if (isEnabled) {
    return (
      <Content>
        <p>Draft Mode</p>
      </Content>
    );
  }
  return (
    <Content>
      <p>Homepage</p>
    </Content>
  );
}