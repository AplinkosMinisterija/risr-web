import Table from "../../components/tables/table";
import PageWrapper from "../../components/wrappers/PageWrapper";
import { slugs } from "../../utils/routes";
import { formColumns, pageTitles } from "../../utils/texts";
import { useData } from "./hooks/useData";

const Forms = () => {
  const { buttonInfo, filterInfo, navigate, notFoundInfo, tableData, loading } =
    useData();

  return (
    <PageWrapper title={pageTitles.forms} buttonInfo={buttonInfo}>
      <Table
        loading={loading}
        filterInfo={filterInfo}
        notFoundInfo={notFoundInfo}
        columns={formColumns}
        onClick={(id: string) => navigate(slugs.form(id))}
        data={tableData}
      />
    </PageWrapper>
  );
};

export default Forms;
