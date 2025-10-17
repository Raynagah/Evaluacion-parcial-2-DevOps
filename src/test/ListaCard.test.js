import React from "react";
import { render, screen } from "@testing-library/react";
import ListaCard from "../componentes/organismos/ListaCard";
import { MemoryRouter } from "react-router-dom";

describe("ListaCard - prueba de integración completa", () => {
	// base de datos simulada
	const descripciones = [
		{ id: 1, descripcion: "Descripcion 1", foto: "https://via.placeholder.com/150", nombre: "Isla 1" },
		{ id: 2, descripcion: "Descripcion 2", foto: "https://via.placeholder.com/150", nombre: "Isla 2" },
		{ id: 3, descripcion: "Descripcion 3", foto: "https://via.placeholder.com/150", nombre: "Isla 3" }
	];

	beforeEach(() => {
		render(
			<MemoryRouter>
				<ListaCard descripciones={descripciones}  />
			</MemoryRouter>
		);
	});

	//  Prueba de renderizado: verifica que todas las Cards aparezcan
	it("debería renderizar todas las Cards", () => {
		descripciones.forEach(desc => {
			expect(screen.getByText(desc.nombre)).toBeTruthy();
			expect(screen.getByText(desc.descripcion)).toBeTruthy();
		});
	});
});
