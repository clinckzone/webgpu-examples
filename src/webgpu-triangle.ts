async function main() {
	const adapter = await navigator.gpu?.requestAdapter();
	const device = await adapter?.requestDevice();
	if (!device) {
		alert('need a browser that supports WebGPU');
		return;
	}

	// Get a WebGPU context from the canvas and configure it
	const canvas = document.querySelector('canvas')!;
	const context = canvas.getContext('webgpu')!;
	const presentationFormat = navigator.gpu!.getPreferredCanvasFormat();
	context.configure({
		device,
		format: presentationFormat,
	});

	const module = device.createShaderModule({
		label: 'our hardcoded red triangle shaders',
		code: `
      @vertex fn vs(
        @builtin(vertex_index) vertexIndex : u32
      ) -> @builtin(position) vec4f {
        let pos = array(
          vec2f( 0.0,  0.5),  // top center
          vec2f(-0.5, -0.5),  // bottom left
          vec2f( 0.5, -0.5)   // bottom right
        );

        return vec4f(pos[vertexIndex], 0.0, 1.0);
      }

      @fragment fn fs() -> @location(0) vec4f {
        return vec4f(1, 0, 0, 1);
      }
    `,
	});

	const pipeline = device.createRenderPipeline({
		label: 'our hardcoded red triangle pipeline',
		layout: 'auto',
		vertex: {
			module,
			entryPoint: 'vs',
		},
		fragment: {
			module,
			entryPoint: 'fs',
			targets: [{ format: presentationFormat }],
		},
	});

	const renderPassDescriptor = {
		label: 'our basic canvas renderPass',
		colorAttachments: [
			{
				// Get the current texture from the canvas context and
				// set it as the texture to render to.
				view: context.getCurrentTexture().createView(),
				clearValue: [0.3, 0.3, 0.3, 1],
				loadOp: 'clear' as GPULoadOp,
				storeOp: 'store' as GPUStoreOp,
			},
		],
	};

	function render() {
		// make a command encoder to start encoding commands
		const encoder = device!.createCommandEncoder({ label: 'our encoder' });

		// make a render pass encoder to encode render specific commands
		const pass = encoder.beginRenderPass(renderPassDescriptor);
		pass.setPipeline(pipeline);
		pass.draw(3); // call our vertex shader 3 times.
		pass.end();

		const commandBuffer = encoder.finish();
		device!.queue.submit([commandBuffer]);
	}

	render();
}

main();
