import VisitPage from "../visit-page";
export const metadata = {
  title: "Already coming for SXSW? | Visit Sanctuary",
  description:
    "Add a personal introduction to Sanctuary and its future community to your Austin trip, before, between, or after your SXSW plans.",
};
export default function Page() {
  return <VisitPage edition="sxsw" />;
}
