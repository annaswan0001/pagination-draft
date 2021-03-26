import { useEffect, useState } from "react";
import { stringify } from "query-string";
import { getPaginator, limit } from "../../utils";
import { useRouteMatch, useLocation } from "react-router-dom";
import Pagination from "./Pagination";
import "./Pagination.css";

const PaginationReactPaginate = () => {
  let location = useLocation();
  let match = useRouteMatch(location.pathname);

  const { offset, currentPage } = getPaginator(location.search);
  const currentUrl = match.url;
  const [data, setData] = useState([]);
  const [articlesCount, setArticlesCount] = useState([]);

  const stringifiedParams = stringify({
    limit,
    offset,
  });

  useEffect(() => {
    const apiUrl = `https://conduit.productionready.io/api/articles?${stringifiedParams}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((json) => {
        setData(json.articles);
        setArticlesCount(json.articlesCount);
      });
  }, [stringifiedParams]);

  return (
    <div className="paginationReactPaginate">
      {data.length>0 && (
        <>
          <ul>
            {data.map((article, i) => {
              return <li key={i}>{article.author.username}</li>;
            })}
          </ul>
       
          <Pagination
            limit={limit}
            total={articlesCount}
            url={currentUrl}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  );
};

export default PaginationReactPaginate;
