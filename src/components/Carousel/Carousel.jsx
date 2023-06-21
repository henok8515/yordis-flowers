import "./style.css";

const Data = [
  {
    id: 1,
    name: "flower1",
    imgUrl:
      "https://images.pexels.com/photos/112396/pexels-photo-112396.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: "2",
    name: "flower2",
    imgUrl:
      "https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 3,
    name: "flower 3",
    imgUrl:
      "https://images.pexels.com/photos/226145/pexels-photo-226145.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 4,
    name: "flower 4",
    imgUrl:
      "https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 5,
    name: "flower 5",
    imgUrl:
      "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 6,
    name: "flower 6",
    imgUrl:
      "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 7,
    name: "flower 7",
    imgUrl:
      "https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 8,
    name: "flower 8",
    imgUrl:
      "https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 9,
    name: "flower-9",
    imgUrl:
      "https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 10,
    name: "flower 10",
    imgUrl:
      "https://images.pexels.com/photos/1179026/pexels-photo-1179026.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 11,
    name: "flower 11",
    imgUrl:
      "https://images.pexels.com/photos/250716/pexels-photo-250716.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    id: 12,
    name: "flower 12",
    imgUrl:
      "https://images.pexels.com/photos/1488310/pexels-photo-1488310.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function Carousle() {
  return (
    <div className="slider">
      <div className="slide-track">
        {Data.map((data) => (
          <div key={data.id}>
            <div className="slide">
              <img className="img" src={data.imgUrl} />{" "}
              <div className="name">
                <h1 className="text-black">200</h1>
                <h2>{data.name}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousle;
