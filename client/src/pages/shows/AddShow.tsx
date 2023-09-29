import { FC, useState } from "react";
import { GenericNumberInput } from "../../components/forms/GenericNumberInput";
import { Show } from "../../models/Show";
import { useAppDispatch } from "../../app/hooks";
import { saveShow, updateShow } from "./show-slice";
import { FileUpload } from "../../components/forms/FileUpload";
import { TextInput, useTextInput } from "../../components/forms/TextInput";
import { SelectInput, useSelectInput } from "../../components/forms/SelectInput";

export const AddShow: FC<{ show?: Show }> = ({ show }) => {
  const [season, setSeason] = useState(show?.season ?? 1)
  const [rating, setRating] = useState(show?.rating ?? 1)
  const [imageUri, setImageUri] = useState(show?.imageUri ?? "")
  const dispatch = useAppDispatch();

  const titleControl = useTextInput(show?.title ?? "")
  const genres = ["Action", "Comedy", "Other"]
  const genreControl = useSelectInput(genres[0], genres)

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newShow: Show = {
      id: show?.id ?? Math.random(),
      title: titleControl.value,
      season,
      rating,
      episodes: show?.episodes ?? [],
      imageUri,
      genre: genreControl.value
    }
    if (!show) {
      dispatch(saveShow(newShow))
      setSeason(1)
      setRating(1)
      setImageUri("")
      titleControl.setValue("")
    }
    else {
      dispatch(updateShow(newShow))
    }
  }

  const canSubmit = titleControl.value !== "" && season > 0 && rating <= 10 && rating > 0
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
                <TextInput control={titleControl}
                  label="Title"
                  labelClassName="col-12 text-start"
                  inputClassName="mb-3"
                  placeholder="title" />
                <SelectInput control={genreControl}
                  label="Genre"
                  labelClassName="col-12"
                  inputClassName="mb-3" />
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
