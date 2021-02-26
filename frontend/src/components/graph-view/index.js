import React from "react";
import Plot from "react-plotly.js";
import data from "../../data.json";

class GraphComponent extends React.Component {
  constructor(props) {
    super(props);
    const start_of_red = data.thresholds.start_of_red;
    const start_of_green = data.thresholds.start_of_green;
    const traceData = {
      x: data.data.plot_x,
      y: data.data.plot_y,
      mode: "markers",
      marker: {
        size: 5,
        color: data.data.thickness,
        colorscale: [
          ["0.0", "rgb(29, 180, 127)"],
          ["0.111111111111", "rgb(0, 237, 1)"],
          ["0.222222222222", "rgb(135, 250, 0)"],
          ["0.333333333333", "rgb(254, 251, 1)"],
          ["0.444444444444", "rgb(255, 225, 52)"],
          ["0.555555555556", "rgb(255, 191, 46)"],
          ["0.666666666667", "rgb(255, 161, 44)"],
          ["0.777777777778", "rgb(254, 97, 44)"],
          ["0.888888888889", "rgb(253, 58, 45)"],
          ["1.0", "rgb(241, 29, 40)"],
        ],
        type: "heatmap",
        reversescale: true,
        showScale: true,
        colorbar: {
          title: "Thickness",
          thicknessmode: "pixels",
          thickness: 20,
          x: 1,
          tickmode: "array",
          tickvals: [start_of_red, start_of_green],
          ticktext: [start_of_red + " in", start_of_green + " in"],
        },
      },
      hoverinfo: "none",
      hovertemplate:
        "Wall Thickness: %{marker.color:.2f}" +
        "<extra>(%{x:.2f}, %{y:.2f})</extra>",
    };

    const graphLayout = {
      title: data.title,
      xaxis: {
        title: {
          text: "Position",
        },
      },
      yaxis: {
        title: {
          text: "Elevation",
        },
      },
      hovermode: "closest",
      autosize: false,
      height: 900,
      width: 900,
    };

    this.state = {
      dataset: [traceData],
      graphLayout,
    };
  }

  render() {
    return (
      <div id="chart">
        <Plot data={this.state.dataset} layout={this.state.graphLayout} />
      </div>
    );
  }
}

export default GraphComponent;