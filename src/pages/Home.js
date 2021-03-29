
import CardPlaylist from "../components/ui/CardPlaylist"
import Template from "./Template"

export default function Home() {
  return (
    <Template>
      <CardPlaylist>
        <img alt="Album" src="data:image/jpeg;base64,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"/>
        <div className="info-wrap">
          <p className="title">Dale Flow</p>
          <p className="description">Lo mejor del regueton y flow actual</p> 
          <p className="followers">267,456 seguidores</p>
        </div> 
      </CardPlaylist>
    </Template>
  )
}