import { useContext, useState } from "react";
import GenericTextInput from "../components/GenericTextInput";
import { GenericNumberInput } from "../components/GenericNumberInput";
import { Show, ShowContextType } from "../models/Show";
import { ShowContext } from "./ShowProvider";

export const AddShow = () => {
  const { saveShow } = useContext(ShowContext) as ShowContextType;
  const [title, setTitle] = useState("")
  const [season, setSeason] = useState(1)
  const [rating, setRating] = useState(1)
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newShow: Show = {
      id: Math.random(),
      title,
      season,
      rating,
      episodes: []
    }
    saveShow(newShow)
  }
  return (
    <>
      <div className="row text-end">
        <div className="col-auto">
          <button className="btn btn-outline-secondary"
            type="button"
            id="modalStart"
            data-bs-toggle="modal"
            data-bs-target="#addShowModal">
            Add
          </button>
        </div>
      </div>
      <div className="modal fade"
        id="addShowModal"
        tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title fs-5">Add Show:</div>
              <button className="btn btn-close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler} className="needs-validation" noValidate>
                <GenericTextInput
                  id="titleInput"
                  label="Title"
                  value={title}
                  isValid={title.length > 0}
                  onChange={(value) => setTitle(value)} />
                <GenericNumberInput
                  id="seasonInput"
                  label="Season"
                  value={season}
                  isValid={season > 0}
                  onChange={(v) => setSeason(v)} />
                <GenericNumberInput
                  id="ratingInput"
                  label="Rating"
                  value={rating}
                  isValid={rating > 0 && rating <= 10}
                  onChange={(v) => setRating(v)} />

                <div className="text-end">
                  <button className="btn btn-success" type="submit"
                    data-bs-dismiss="modal">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
