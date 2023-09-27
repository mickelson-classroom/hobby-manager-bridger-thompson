import { FC, useState } from "react";
import { GenericNumberInput } from "../../components/forms/GenericNumberInput";
import { Show } from "../../models/Show";
import { useAppDispatch } from "../../app/hooks";
import { saveShow, updateShow } from "./show-slice";
import GenericTextInput from "../../components/forms/GenericTextInput";
import { FileUpload } from "../../components/forms/FileUpload";

export const AddShow: FC<{ show?: Show }> = ({ show }) => {
  const [title, setTitle] = useState(show?.title ?? "")
  const [season, setSeason] = useState(show?.season ?? 1)
  const [rating, setRating] = useState(show?.rating ?? 1)
  const [imageUri, setImageUri] = useState(show?.imageUri ?? "")
  const dispatch = useAppDispatch();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newShow: Show = {
      id: show?.id ?? Math.random(),
      title,
      season,
      rating,
      episodes: show?.episodes ?? [],
      imageUri,
    }
    if (!show) {
      dispatch(saveShow(newShow))
      setTitle("")
      setSeason(1)
      setRating(1)
      setImageUri("")
    }
    else {
      dispatch(updateShow(newShow))
    }
  }

  const canSubmit = title !== "" && season > 0 && rating <= 10 && rating > 0
  return (
    <>
      <div className="row text-end">
        <div className="col-auto">
          <button className="btn btn-outline-secondary"
            type="button"
            id="modalStart"
            data-bs-toggle="modal"
            data-bs-target="#addShowModal">
            {show ? <i className="bi bi-pencil" /> : "Add"}
          </button>
        </div>
      </div>
      <div className="modal fade"
        id="addShowModal"
        tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title fs-5">{show ? "Edit" : "Add"} Show:</div>
              <button className="btn btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitHandler} className="needs-validation" noValidate>
                <GenericTextInput
                  id="titleInput"
                  label="Title"
                  value={title}
                  onChange={(value) => setTitle(value)} />
                <GenericNumberInput
                  id="seasonInput"
                  label="Season"
                  value={season}
                  onChange={(v) => setSeason(v)} />
                <GenericNumberInput
                  id="ratingInput"
                  label="Rating"
                  value={rating}
                  onChange={(v) => setRating(v)} />
                <FileUpload onImageSelect={(v) => setImageUri(v)} />
                {imageUri && <img src={imageUri} alt="upload" className="img-fluid" style={{ maxHeight: "20ex" }} />}
                <div className="text-end">
                  <button className="btn btn-success" type="submit"
                    data-bs-dismiss="modal" disabled={!canSubmit}>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
